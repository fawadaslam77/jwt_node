const Blog = require('../models/BlogModel');
const ResponseHelper = require('../helpers/ResponseHelper');

class BaseController{
    static get(model){
       return (req , res, next)=>{
        model.find().exec()
                .then(docs =>{
                    ResponseHelper.dataFoundResponse(res,docs);
                })
                .catch(err =>{
                    ResponseHelper.someThingWentWrongResponse(res,err);
                });
        }
    }

    static getById(model){
        return (req , res, next)=>{
            model.findById(req.params.Id).exec()
                 .then(doc =>{
                     if(doc!=null){
                         ResponseHelper.dataFoundResponse(res,doc);
                     }
                     else{
                         ResponseHelper.dataNotFoundResponse(res);
                     }
                 })
                 .catch(err =>{
                     ResponseHelper.someThingWentWrongResponse(res,err);
                 });
         }
    }

    static update(model){
        return (req , res, next)=>{
            const updateOps=req.body;
            model.update({_id:req.params.Id},{$set:updateOps}).exec()
                    .then(result =>{
                        ResponseHelper.dataUpdatedResponse(res,updateOps);
                    })
                    .catch(err =>{
                        ResponseHelper.someThingWentWrongResponse(res,err);
                    })
        }
    }

    static remove(model){
       return (req , res, next)=>{
            model.remove({_id:req.params.Id}).exec()
            .then(result=>{
                ResponseHelper.dataRemovedResponse(res);
            })
            .catch(err=>{
               ResponseHelper.someThingWentWrongResponse(res,err);
            })
        }
    }

    static add(model){
        return (req , res, next)=>{
            const doc = new model(req.body);
            doc.save().then(result =>{
                ResponeHelper.dataSavedResponse(res);
            })
            .catch(err =>{
                ResponseHelper.someThingWentWrongResponse(res,err);
            })
            
        }
    }
}

module.exports = BaseController;