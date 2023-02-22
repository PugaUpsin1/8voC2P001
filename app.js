const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser")

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))
app.use(bodyparser.urlencoded({extended:true}));

let datos =[{
  matricula:"2020030209",
  nombre:"ACOSTA ORTEGA HUMBERTO",
  sexo:"M",
  Materias:["Ingles", "Tecnologias", "Base de datos"]
},{
  matricula:"2020030309",
  nombre:"ACOSTA VALERA IRVING GUADALUPE",
  sexo:"M",
  Materias:["Ingles", "Tecnologias", "Base de datos"]
},{
  matricula:"2020030319",
  nombre:"ALMOGAR VAZQUEZ YARLEN DE JESUS ",
  sexo:"F",
  Materias:["Ingles", "Tecnologias", "Base de datos"]
},{
  matricula:"2020030282",
  nombre:"ISSAC DAVID PUGA VAZQUEZ",
  sexo:"M",
  Materias:["Ingles", "Tecnologias", "Base de datos"]
},{
  matricula:"2020030210",
  nombre:"HERNANDEZ IBARGUEN JUSTIN ADILAN",
  sexo:"M",
  Materias:["Ingles", "Tecnologias", "Base de datos"]
},{
  matricula:"2020030316",
  nombre:"ALONDRA GUADALUPE SOTO OSUNA",
  sexo:"F",
  Materias:["Ingles", "Tecnologias", "Base de datos"]
}]

app.get('/', (req,res)=>{


  res.render('index', {titulo:"LISTADO DE ALUMNOS",listado:datos})
  // res.render('index', {titulo:"Mi primer ejs",nombre:"Issac David Puga Vazquez", grupo:"8-4"})
  //  res.send("<header><h1>Iniciamos con express </h1></header>");

})



app.get("/tablas",(req,res)=>{
  const valores ={
    tabla:req.query.tabla
  }
  res.render('tablas', valores);
})

app.post("/tablas",(req,res)=>{
  const valores ={
    tabla:req.body.tabla
  }
  res.render('tablas',valores)
})

// Cotizazcion

app.get("/cotizacion",(req,res)=>{
  const valores ={
    valor:req.query.valor,
    pInicial:req.query.pInicial,
    plazos1:req.query.plazos1
  }
  res.render('cotizacion', valores);
})

app.post("/cotizacion",(req,res)=>{
  const valores ={
    valor:req.body.valor,
    pInicial:req.body.pInicial,
    plazos1:req.body.plazos1 
  }
  res.render('cotizacion',valores)
})

//error

app.use((req,res,next)=>{
  res.status(404).sendFile(__dirname+'/public/error.html');
})

// Escuchar el servidor por el puerto 3000
const puerto = 3000;

app.listen(puerto,()=>{

    
 console.log("Iniciado puerto 3000");

})


