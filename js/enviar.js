$(document).ready(function(){
    $('.contactoIndex').submit(function(e){
        e.preventDefault();

        // swal({
        //     position: 'top-end',
        //     type: 'success',
        //     title: 'Datos Enviados!',
        //     text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
        //     showConfirmButton: true,
            
        //     }).then((result)=>{
                
        //     if(result.value){
      
        //       window.location ="index.html";
        //     }
      
      
        //   });//fin swal

         
        /*CODIGO A EJECUTAR EN UN HOSTING */


        var datos = $(this).serialize();
        $.ajax({
            type:'post',
            url:'contacto.php',
            data:datos,
            success:function(data){
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Datos Enviados!',
                    text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
                    showConfirmButton: true,
                    
                    }).then((result)=>{
                        
                    if(result.value){
              
                      window.location ="index.html";
                    }
              
              
                  });//fin swal
            }
        })//FIN AJAX
    })


    $('.subscribirIndex').submit(function(e){
        e.preventDefault();

        // swal({
        //     position: 'top-end',
        //     type: 'success',
        //     title: 'Suscripcion Correcta!',
        //     text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
        //     showConfirmButton: true,
            
        //     }).then((result)=>{
                
        //     if(result.value){
      
        //       window.location ="index.html";
        //     }
      
      
        //   });//fin swal

         
        /*CODIGO A EJECUTAR EN UN HOSTING */


        var datos = $(this).serialize();
        $.ajax({
            type:'post',
            url:'subscribir .php',
            data:datos,
            success:function(data){
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: 'Datos Enviados!',
                    text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
                    showConfirmButton: true,
                    
                    }).then((result)=>{
                        
                    if(result.value){
              
                      window.location ="index.html";
                    }
              
              
                  });//fin swal
            }
        })//FIN AJAX
    })

    //CONTACTO NOSOTROS
    $('.contactoNosotros').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Datos Enviados!',
          text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="nosotros.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'contacto.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="nosotros.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN CONTACTO NOSOTROS

    //SUBSRIBIR CONTACTO
    $('.subscribirNosotros').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Suscripcion Correcta!',
          text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="nosotros.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'subscribir.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="nosotros.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN SUBSRIBIR CONTACTO

    //CONTACTO CONTACTO
    $('.contactoContacto').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Datos Enviados!',
          text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="contacto.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'contacto.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="contacto.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN CONTACTO 

    //SUBSRIBIR CONTACTO
    $('.subscribirContacto').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Suscripcion Correcta!',
          text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="contacto.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'contacto.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="contacto.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN SUBSRIBIR CONTACTO


     //CONTACTO AUTOMATIZACION
     $('.contactoAutomatizacion').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Datos Enviados!',
          text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="automatizacion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'contacto.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="automatizacion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN CONTACTO automatizacion

    //SUBSRIBIR AUTOMATIZACION
    $('.subscribirAutomatizacion').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Suscripcion Correcta!',
          text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="automatizacion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'subscribir.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="automatizacion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN SUBSRIBIR AUTOMATIZACION


    //CONTACTO fertirrigacion
    $('.contactoFertirrigacion').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Datos Enviados!',
          text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="fertirrigacion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'contacto.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="fertirrigacion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN CONTACTO fertirrigacion

    //SUBSRIBIR FERTIRRIGACION
    $('.subscribirFertirrigacion').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Suscripcion Correcta!',
          text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="fertirrigacion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'subscribir.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="fertirrigacion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN SUBSRIBIR fertirrigacion



     //CONTACTO diseño-ejecucion
     $('.contactoDiseño').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Datos Enviados!',
          text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="diseño-ejecucion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'contacto.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="diseño-ejecucion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN CONTACTO diseño-ejecucion

    //SUBSRIBIR diseño-ejecucion
    $('.subscribirDiseño').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Suscripcion Correcta!',
          text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="diseño-ejecucion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'subscribir.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="diseño-ejecucion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN SUBSRIBIR diseño



     //CONTACTO impermeabilizacion
     $('.contactoImper').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Datos Enviados!',
          text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="impermeabilizacion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'contacto.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="impermeabilizacion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN CONTACTO impermeabilizacion

    //SUBSRIBIR impermeabilizacion
    $('.subscribirImper').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Suscripcion Correcta!',
          text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="impermeabilizacion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'subscribir.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="impermeabilizacion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN SUBSRIBIR impermeabilizacion


     //CONTACTO electrofusion
     $('.contactoElectro').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Datos Enviados!',
          text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="electrofusion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'contacto.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="electrofusion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN CONTACTO electrofusion

    //SUBSRIBIR electrofusion
    $('.subscribirElectro').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Suscripcion Correcta!',
          text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="electrofusion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'subscribir.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="electrofusion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN SUBSRIBIR electrofusion


    //CONTACTO termofusion
    $('.contactoTermo').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Datos Enviados!',
          text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="termofusion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'contacto.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="termofusion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN CONTACTO termofusion

    //SUBSRIBIR termofusion
    $('.subscribirTermo').submit(function(e){
      e.preventDefault();

      swal({
          position: 'top-end',
          type: 'success',
          title: 'Suscripcion Correcta!',
          text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
          showConfirmButton: true,
          
          }).then((result)=>{
              
          if(result.value){
    
            window.location ="termofusion.html";
          }
    
    
        });//fin swal

       
      /*CODIGO A EJECUTAR EN UN HOSTING */


      // var datos = $(this).serialize();
      // $.ajax({
      //     type:'post',
      //     url:'subscribir.php',
      //     data:datos,
      //     success:function(data){
      //         swal({
      //             position: 'top-end',
      //             type: 'success',
      //             title: 'Datos Enviados!',
      //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
      //             showConfirmButton: true,
                  
      //             }).then((result)=>{
                      
      //             if(result.value){
            
      //               window.location ="termofusion.html";
      //             }
            
            
      //           });//fin swal
      //     }
      // })//FIN AJAX
    })
    //FIN SUBSRIBIR termofusion


      //CONTACTO acesorio
      $('.contactoAcces').submit(function(e){
        e.preventDefault();
  
        swal({
            position: 'top-end',
            type: 'success',
            title: 'Datos Enviados!',
            text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
            showConfirmButton: true,
            
            }).then((result)=>{
                
            if(result.value){
      
              window.location ="accesorios.html";
            }
      
      
          });//fin swal
  
         
        /*CODIGO A EJECUTAR EN UN HOSTING */
  
  
        // var datos = $(this).serialize();
        // $.ajax({
        //     type:'post',
        //     url:'contacto.php',
        //     data:datos,
        //     success:function(data){
        //         swal({
        //             position: 'top-end',
        //             type: 'success',
        //             title: 'Datos Enviados!',
        //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
        //             showConfirmButton: true,
                    
        //             }).then((result)=>{
                        
        //             if(result.value){
              
        //               window.location ="accesorios.html";
        //             }
              
              
        //           });//fin swal
        //     }
        // })//FIN AJAX
      })
      //FIN CONTACTO accesorios
  
      //SUBSRIBIR accesorios
      $('.subscribirAcces').submit(function(e){
        e.preventDefault();
  
        swal({
            position: 'top-end',
            type: 'success',
            title: 'Suscripcion Correcta!',
            text :'Gracias por suscribirte, en breve nos comunicaremos contigo',
            showConfirmButton: true,
            
            }).then((result)=>{
                
            if(result.value){
      
              window.location ="accesorios.html";
            }
      
      
          });//fin swal
  
         
        /*CODIGO A EJECUTAR EN UN HOSTING */
  
  
        // var datos = $(this).serialize();
        // $.ajax({
        //     type:'post',
        //     url:'subscribir.php',
        //     data:datos,
        //     success:function(data){
        //         swal({
        //             position: 'top-end',
        //             type: 'success',
        //             title: 'Datos Enviados!',
        //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
        //             showConfirmButton: true,
                    
        //             }).then((result)=>{
                        
        //             if(result.value){
              
        //               window.location ="accesorios.html";
        //             }
              
              
        //           });//fin swal
        //     }
        // })//FIN AJAX
      })
      //FIN SUBSRIBIR accesorios

      // Guardar valores de cada formulario abierto
      var clase=$(this).val("#claseInputContacto");
      console.log('clase', clase)
      var rutaContacto=$(this).val("#inputRutaContacto");
      console.log('rutaContacto', rutaContacto)

      var claseSubscribir=$(this).val("#inputSubscribirClase");
      var rutaSubscribir=$(this).val("#inputRutaSubs");

      //Codificamos la funcion que hara al obtener las variables anteriores
      $('.+clase').submit(function(e){
        e.preventDefault();
  
        swal({
            position: 'top-end',
            type: 'success',
            title: 'Datos Enviados!',
            text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
            showConfirmButton: true,
            
            }).then((result)=>{
                
            if(result.value){
      
              window.location ="rutaContacto";
            }
      
      
          });//fin swal
  
         
        /*CODIGO A EJECUTAR EN UN HOSTING */
  
  
        // var datos = $(this).serialize();
        // $.ajax({
        //     type:'post',
        //     url:'contacto.php',
        //     data:datos,
        //     success:function(data){
        //         swal({
        //             position: 'top-end',
        //             type: 'success',
        //             title: 'Datos Enviados!',
        //             text :'Gracias por escribirnos, en breve nos comunicaremos contigo',
        //             showConfirmButton: true,
                    
        //             }).then((result)=>{
                        
        //             if(result.value){
              
        //               window.location =rutaContacto;
        //             }
              
              
        //           });//fin swal
        //     }
        // })//FIN AJAX
      })

})