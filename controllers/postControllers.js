const Employee = require('../models/Post')

//emp array contains both field data and row data both but we only row data
// so we write [emp,_]
exports.getAllEmployee = async(req,res,next) =>{
    try{
        const [emp,_] = await Employee.findAll();
        res.status(200).json({emp});
    }catch(err){
        console.log(err);
        next(err);
    }
}

exports.createEmployee = async(req,res,next) =>{
    try{
        let {first_name,last_name,department} = req.body;
        let emp =new  Employee(first_name,last_name,department);

        emp = await emp.save();
        res.status(201).json({message : "Employee Added"})
    }catch(err){
        console.log(err);
        next(err);
    }
}

exports.getEmlpoyeeById = async(req,res,next) =>{
    try{
        let id = req.params.id;
        let [emp ,_] = await Employee.findById(id);
        if(emp.length==0)res.status(504).json({message:"Employee Not Present"});
        else res.status(200).json({emp:emp[0]});
    }catch(err)
    {
        console.log(err);
        next(err);
    }
}

exports.deleteEmployee = async(req,res,next) =>{
    try{
        let id = req.params.id;
        let [emp,_] = await Employee.deleteEmployeeById(id);
        if(emp.length==0)res.status(504).json({message:"Employee Not Present"});
        else res.status(201).json({message:"Employee Deleted"});
    }catch(err){
        console.log(err);
        next(err);
    }
}

exports.updateEmployee = async(req,res,next) =>{
    try{
        let id = req.params.id;
        let [temp,_] = await Employee.findById(id);
        if(temp.length==0)res.status(504).json({message:"Employee Not Present"});
        else{
            let {first_name,last_name,department,joing_date} = req.body;
            let emp = await Employee.updateEmployeeById(id,first_name,last_name,department,joing_date);
            res.status(201).json({message:"Employee Updated"});
        }
       
    }catch(err){
        console.log(err);
        next(err);
    }
}