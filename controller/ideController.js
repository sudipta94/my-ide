const {c, cpp, node, python, java} = require('compile-run');
var fs = require('fs');
const path = require('path');
let result;
let precode;
let langs;
let er;
exports.index = (req, res, next) => {
    res.render('ide',{
        result:result,
        precode:precode,
        langs:langs,
        er:er
    });
    result=null;
    precode=null;
    langs=null;
    er=''
};
exports.execution=(req, res, next)=>{
    const code=req.body.code;
    const input=''+req.body.input;
    const lang=req.body.lang;
    if(lang=='Python'){
        fs.writeFile('codes/demo.py', code, function (err) {
            if (err){
                console.log(err);
            } else {
                python.runFile('codes/demo.py', {
                    timeout:50000,
                    stdin:input
                    }, (err, results) => {
                    if(err){
                        console.log(err);  
                    }
                    else{
                        console.log(results);
                        fs.unlink('codes/demo.py', function (err) {
                            if (err){console.log(err)
                            } else{
                                result=results;
                                precode=code;
                                langs=lang;
                                res.redirect('/');
                            }
                          });
                    }
                });
            }  
          });
    } else if(lang=='C'){
        fs.writeFile('codes/demo.c', code, function (err) {
            if (err){
                console.log(err);
            } else {
                c.runFile('codes/demo.c', {
                    timeout:50000,
                    stdin:input
                    }, (err, results) => {
                    if(err){
                        console.log(err);  
                    }
                    else{
                        console.log(results);
                        fs.unlink('codes/demo.c', function (err) {
                            if (err){console.log(err)
                            } else{
                                result=results;
                                precode=code;
                                langs=lang;
                                res.redirect('/');
                            }
                          });
                    }
                });
            }  
          });
    } else if(lang=='C++'){
        fs.writeFile('codes/demo.cpp', code, function (err) {
            if (err){
                console.log(err);
            } else {
                cpp.runFile('codes/demo.cpp', {
                    timeout:50000,
                    stdin:input
                    }, (err, results) => {
                    if(err){
                        console.log(err);  
                    }
                    else{
                        console.log(results);
                        fs.unlink('codes/demo.cpp', function (err) {
                            if (err){console.log(err)
                            } else{
                                result=results;
                                precode=code;
                                langs=lang;
                                res.redirect('/');
                            }
                          });
                    }
                });
            }  
          });
    } else if(lang=='Java'){
        fs.writeFile('codes/Demo.java', code, function (err) {
            if (err){
                console.log(err);
            } else {
                java.runFile('codes/Demo.java', {
                    timeout:50000,
                    stdin:input
                    }, (err, results) => {
                    if(err){
                        console.log(err);  
                    }
                    else{
                        console.log(results);
                        fs.unlink('codes/Demo.java', function (err) {
                            if (err){console.log(err)
                            } else{
                                result=results;
                                precode=code;
                                langs=lang;
                                res.redirect('/');
                            }
                          });
                    }
                });
            }  
          });
    } else if(lang=='JavaScript'){
        fs.writeFile('codes/demo.js', code, function (err) {
            if (err){
                console.log(err);
            } else {
                node.runFile('codes/demo.js', {
                    }, (err, results) => {
                    if(err){
                        console.log(err);  
                    }
                    else{
                        console.log(results);
                        fs.unlink('codes/demo.js', function (err) {
                            if (err){console.log(err)
                            } else{
                                result=results;
                                precode=code;
                                langs=lang;
                                res.redirect('/');
                            }
                          });
                    }
                });
            }  
          });
    } else {
        er='Select Compiler';
        res.redirect('/');
    }
};
