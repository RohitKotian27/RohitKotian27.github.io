var botui = new BotUI('my-botui-app');
var myBudget;
var myBrand;
      botui.message.add({ // show a message
        type: 'html',
        content: 'Hi! My name is Jarvis your Digital Assistant<br/>Before we start, please tell me your name.'
      }).then(function () { // wait till its shown
        return botui.action.text({ // show 'text' action
          action: {
            placeholder: 'Your name'
          }
        });
    }).then(function (res) { // get the result
        return botui.message.add({
          type: 'html',
          delay: 1000,
          loading: true,
          content: 'Hi ' + res.value + '<br/> Can I introduce myself?'
        });
    }).then(function(){
      return botui.action.button({
          action: [
            { // show only one button
              text: 'Yes',
              value: '1',
            },
            {
              text: 'No',
              value:'0',
            },
          ]
          }).then(function(res){
            if(res.value == 1){
              botui.message.add({ // show a message
                delay: 1000,
                type: 'html',
                loading: true,
                content: "<p>My name is Jarvis and I am here to help you as a Smartphone Buying Assistant so that you can get the best value for your Money.</p>What is your Budget for buying a smartphone?"
              }).then(function(){
                return botui.action.button({
                  action: [
                    { // show only one button
                      text: '10000',
                      value: 10,
                    },
                    {
                      text: '15000',
                      value: 15,
                    },
                    {
                      text: '20000',
                      value: 20,
                    },
                    {
                      text: '25000',
                      value: 25,
                    },
                    {
                      text: '30000 and above',
                      value: 30,
                    },
                  ]
                }).then(function(res){
                  switch (res.value) {
                    case 10:
                    botui.message.add({ // show a message
                      delay: 1000,
                      loading: true,
                      content: 'Ok, In this range we have multiple smartphones but I need to inform you that the specifications of these smartphones would not be that great!'
                    });
                    myBudget = 10000;
                      break;
                      case 15:
                      botui.message.add({ // show a message
                        delay: 1000,
                        loading: true,
                        content: 'Nice, This is an optimum Budget for a Mid-range smartphone and you would be happy with the performance of these devices.'
                      });
                      myBudget = 15000;
                      break;
                      case 20:
                      botui.message.add({ // show a message
                        delay: 1000,
                        loading: true,
                        content: "Great, With this budget you can buy some amazing smartphones with best specifications that suits everyone's need."
                      });
                      myBudget = 20000;
                      break;
                      case 25:
                      botui.message.add({ // show a message
                        delay: 1000,
                        loading: true,
                        content: "Woah, Welcome to the premium smartphones category and I am sure that you won't be disappointed."
                      });
                      myBudget = 25000;
                      break;
                      case 30:
                      botui.message.add({ // show a message
                        delay: 1000,
                        loading: true,
                        content: "Good choice, Most people avoid buying flagship smartphones but the ones who buy it know that these smartphones are value for Money."
                      });
                      myBudget = 30000;
                      break;
                      default:
                      botui.message.add({ // show a message
                        delay: 1000,
                        loading: true,
                        content: "Sorry I am in a learning stage and will get back to you soon."
                      });
                  }
                });
              }).then(function(){
                botui.message.add({ // show a message
                  delay: 4000,
                  loading: true,
                  content: 'So now your Budget is finalized I have one more question i.e. Can you please let me know which smartphone Brand do you prefer to buy?'
                }).then(function(){
                  if(myBudget > 25000){
                    return botui.action.button({
                      action: [
                        { // show only one button
                          text: 'Apple',
                          value: 'Apple',
                        },
                        {
                          text: 'One Plus',
                          value: 'One Plus',
                        },
                        {
                          text: 'Samsung',
                          value: 'Samsung',
                        },
                        {
                          text: 'Google',
                          value: 'Google',
                        },
                        {
                          text: 'Motorola',
                          value: 'Motorola',
                        },
                        {
                          text: 'Asus',
                          value: 'Asus',
                        },
                        {
                          text: 'LG',
                          value: 'LG',
                        },
                      ]
                    });
                  }
                  else{
                    return botui.action.button({
                      action: [
                        { // show only one button
                          text: 'Xioami',
                          value: 'Xioami',
                        },
                        {
                          text: 'Realme',
                          value: 'Realme',
                        },
                        {
                          text: 'Samsung',
                          value: 'Samsung',
                        },
                        {
                          text: 'Oppo',
                          value: 'Oppo',
                        },
                        {
                          text: 'Vivo',
                          value: 'Vivo',
                        },
                        {
                          text: 'Honor',
                          value: 'Honor',
                        },
                        {
                          text: 'Huawei',
                          value: 'Huawei',
                        },
                        {
                          text: 'Motorola',
                          value: 'Motorola',
                        },
                        {
                          text: 'Nokia',
                          value: 'Nokia',
                        },
                      ]
                    }).then(function(res){
                        myBrand = res.value;
                        if((myBudget < 15000) && (myBrand == "Xioami")){
                          botui.message.add({ // show a message
                            delay: 1000,
                            loading: true,
                            // Listing Section code for Redmi Mobiles Starts here.
                            content: 'The Smartphones as per your selection are : <br/>\
                            <div class="p-1 row no-gutters">\
                              <div class="w-25">\
                                ![Mobile image](images/redmi-9a.png)\
                              </div>\
                              <div class="w-75">\
                                <div class="mobDesc pl-3"><div><div>Redmi 9A.</div>\
                                                     <div>Price : 6799 Rs.</div>\
                                                     <div>[Buy Now!](https://www.amazon.in/Redmi-9A-2GB-32GB-Storage/dp/B086978F2L/ref=sr_1_5?dchild=1&keywords=Redmi&qid=1602429594&refinements=p_89%3ARedmi%2Cp_36%3A1318505031&rnid=1318502031&s=electronics&sr=1-5)^</div></div>\
                                </div>\
                              </div>\
                            </div>\
                            <hr/>\
                            <div class="p-1 row no-gutters">\
                              <div class="w-25">\
                                ![Mobile image](images/redmi-8a-dual.png)\
                              </div>\
                              <div class="w-75">\
                                <div class="mobDesc pl-3"><div><div>Redmi 8A Dual.</div>\
                                                     <div>Price : 8999 Rs.</div>\
                                                     <div>[Buy Now!](https://www.amazon.in/Redmi-8A-Dual-Blue-Storage/dp/B08698559Z/ref=sr_1_4?dchild=1&keywords=Redmi&qid=1602398887&refinements=p_89%3ARedmi%2Cp_36%3A1318505031&rnid=1318502031&s=electronics&sr=1-4)^</div></div>\
                                </div>\
                              </div>\
                            </div>\
                            <hr/>\
                            <div class="p-1 row no-gutters">\
                              <div class="w-25">\
                                ![Mobile image](images/redmi-9.png)\
                              </div>\
                              <div class="w-75">\
                                <div class="mobDesc pl-3"><div><div>Redmi 9.</div>\
                                                     <div>Price : 9999 Rs.</div>\
                                                     <div>[Buy Now!](https://www.amazon.in/Test-Dummy_March_2020_87-Black-128BG-Storage/dp/B086984LJV/ref=sr_1_6?dchild=1&keywords=Redmi&qid=1602429594&refinements=p_89%3ARedmi%2Cp_36%3A1318505031&rnid=1318502031&s=electronics&sr=1-6)^</div></div>\
                                </div>\
                              </div>\
                            </div>\
                            <hr/>\
                            <div class="p-1 row no-gutters">\
                              <div class="w-25">\
                                ![Mobile image](images/redmi-9-prime.png)\
                              </div>\
                              <div class="w-75">\
                                <div class="mobDesc pl-3"><div><div>Redmi 9 Prime.</div>\
                                                     <div>Price : 9999 Rs.</div>\
                                                     <div>[Buy Now!](https://www.amazon.in/Redmi-Prime-Storage-Display-Camera/dp/B08696XM8J/ref=sr_1_12?dchild=1&keywords=Redmi&qid=1602429594&refinements=p_89%3ARedmi%2Cp_36%3A1318505031&rnid=1318502031&s=electronics&sr=1-12)^</div></div>\
                                </div>\
                              </div>\
                            </div>'
                        });
                        }
                        else if((myBudget < 20000) && (myBrand == "Xioami")){
                          botui.message.add({ // show a message
                            delay: 1000,
                            loading: true,
                            content: 'The Smartphones as per your selection are : Redmi Note 8 Pro, Redmi Note 8, Redmi Note 7 Pro, Xiaomi Mi A3, Redmi Note 6 Pro'
                          });
                        }
                    });
                  }
                });
              });
          }
            else{
              botui.message.add({ // show a message
                delay: 1000,
                loading: true,
                content: 'No problem have a nice day!'
            });
          }
        });
    });
