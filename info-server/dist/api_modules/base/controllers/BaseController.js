"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = require("../../middleware/middleware");
const Joi = require("@hapi/joi");
const mongooseErrorHandler = require('mongoose-error-handler');
const middleware = new middleware_1.default();
/**
 * Abstract class for basic CRUD operations.
 *
 * @abstract
 * @class BaseController
 */
class BaseController {
    constructor() {
        this.size = 10;
        this.searchFilter = {};
        this.dataPopulation = {};
        /**
         * Function to get all records from the collection.
         *
         * @memberof BaseController
         */
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pageNo = ((!isNaN(req.body.page) && (parseInt(req.body.page) > 0)) ? parseInt(req.body.page) : 1);
                this.size = parseInt(req.body.limit) || this.size;
                const filters = { skip: this.size * (pageNo - 1), limit: this.size };
                const totalRecords = yield this.model.countDocuments(req.body.searchFilter || {});
                this.queryObj = this.model.find(req.body.searchFilter || {}, {}, filters);
                if (Object.keys(this.dataPopulation).length > 0) {
                    this.queryObj.populate(this.dataPopulation);
                }
                this.queryObj.exec((err, records) => {
                    if (err) {
                        return next(err);
                    }
                    if (records.length == 0) {
                        return res.status(200).json(this.filterResponse(true, 200, 'No records found.', { records: records, pagination: {} }));
                    }
                    return res.status(200).json(this.filterResponse(true, 200, 'Records fetched successfully.', { records: records, pagination: { currentPage: pageNo, totalPages: Math.round(totalRecords / this.size), recordsFound: totalRecords } }));
                });
            }
            catch (ex) {
                return next(middleware.customErrorHandler(500, ex.name, 'Something went wrong.', ex.message));
            }
        });
        /**
         * Function to get count of all records from the collection.
         *
         * @memberof BaseController
         */
        this.count = (req, res, next) => {
            try {
                this.model.count((err, count) => {
                    if (err) {
                        return next(err);
                    }
                    return res.status(200).json(this.filterResponse(true, 200, 'Records fetched successfully.', { records: count }));
                });
            }
            catch (ex) {
                return next(middleware.customErrorHandler(500, ex.name, 'Something went wrong.', ex.message));
            }
        };
        /**
         *Function to save the record in the collection.
         *
         * @memberof BaseController
         */
        this.insert = (req, res, next) => {
            const obj = new this.model(req.body);
            try {
                obj.save((err, item) => {
                    let data;
                    // 11000 is the code for duplicate key error
                    if (err && err.code === 11000) {
                        return res.status(200).json(this.filterResponse(false, 200, 'Record is already exists.', { errors: { name: err.name, message: 'Record is already exists' } }));
                    }
                    if (err) {
                        data = (err.name == 'ValidationError') ? mongooseErrorHandler.set(err) : err;
                        return res.status(200).json(this.filterResponse(false, 200, 'Parameters missing.', data));
                    }
                    return res.status(200).json(this.filterResponse(true, 200, 'Record inserted successfully!.', item));
                });
            }
            catch (ex) {
                return next(middleware.customErrorHandler(500, ex.name, 'Something went wrong.', ex.message));
            }
        };
        /**
         *Function to get the single record from the collection by record id
         *
         * @memberof BaseController
         */
        this.get = (req, res, next) => {
            try {
                this.queryObj = this.model.findOne({ _id: req.params.id });
                if (Object.keys(this.dataPopulation).length > 0) {
                    this.queryObj.populate(this.dataPopulation);
                }
                this.queryObj.exec((err, item) => {
                    if (err) {
                        return next(err);
                    }
                    if (!item) {
                        return res.status(404).json(this.filterResponse(true, 404, 'No records found.', {}));
                    }
                    return res.status(200).json(this.filterResponse(true, 200, 'Record found successfully!.', item));
                });
            }
            catch (ex) {
                return next(middleware.customErrorHandler(500, ex.name, 'Something went wrong.', ex.message));
            }
        };
        /**
         *Function to update collection record.
         *
         * @memberof BaseController
         */
        this.update = (req, res, next) => {
            try {
                this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
                    if (err) {
                        return next(err);
                    }
                    return res.status(200).json(this.filterResponse(true, 200, 'Record updated successfully!.', req.body));
                });
            }
            catch (ex) {
                return next(middleware.customErrorHandler(500, ex.name, 'Something went wrong.', ex.message));
            }
        };
        /**
         *Function to delete collection record.
         *
         * @memberof BaseController
         */
        this.delete = (req, res, next) => {
            try {
                this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
                    if (err) {
                        return next(err);
                    }
                    return res.status(200).json(this.filterResponse(true, 200, 'Record deleted successfully!.', { _id: req.params.id }));
                });
            }
            catch (ex) {
                return next(middleware.customErrorHandler(500, ex.name, 'Something went wrong.', ex.message));
            }
        };
        /**
         *Function to filter the response.
         *
         * @memberof BaseController
         */
        this.filterResponse = (status, statusCode, message, data) => {
            return { status: { isSuccessful: status, code: statusCode, message: message }, data: data };
        };
        /**
         *Function to validate model schema
         *
         * @memberof BaseController
         */
        this.validateUserData = (req, res, next) => {
            Joi.validate(req.body, this.schemaValidation, function (err, value) {
                if (!err) {
                    return next();
                }
                err.details = { "path": err.details[0].context.key, "message": err.details[0].message };
                return next(err);
            });
        };
    }
}
exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map