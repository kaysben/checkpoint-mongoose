const ContactSchema = require("../models/contact")

exports.AddContact= async(req,res)=>{
    const {email}=req.body
    try {
        const newContact= new ContactSchema(req.body)
       const found = await ContactSchema.findOne({email})
       if (found) {return res.status(400).send('contact aleardy exists') }
        await newContact.save()
       res.status(200).send({msg:"contact added",newContact})

        
    } catch (error) {
        res.status(500).send({msg:"could not add contact"})}}

exports.Getcontact=async (req,res)=>{
    try {
        const contacts= await ContactSchema.find()
        res.status(200).send({msg:"list of msg ",contacts})
    } catch (error) {
        res.stattus(500).send({msg:"could not get contacts"})
    }
}

exports.getOneContact=async(req,res)=>{
    const {id}=req.params
    try {
        const foundContact= await ContactSchema.findById(id)
        res.status(200).send({msg:"contact found",foundContact})   
        
    } catch (error) {
        res.status(500).send ({msg:"could not get contact"})}}
        

exports.DeleteContact=async(req,res)=>{
    const {id}=req.params
    try {
        const deleted=ContactSchema.findByIdAndDelete(id)
        res.status(200).send({msg:"contact deleted",deleted})
        
    } catch (error) {

        res.status(500).send({msg:"could not delete contact"})
        
    }

}


 exports.updateContact= async(req,res)=>{
          const {id}=req.params
          try {
              const updated= await ContactSchema.findByIdAndUpdate(id,  {$set:{...req.body}})
              res.status(200).send({msg:"contact updated",updated})
          } catch (error) {
              res.status(500).send({msg:"could not update contact"})
          }
      }