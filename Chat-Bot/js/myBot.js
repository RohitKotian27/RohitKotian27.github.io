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
                  delay: 3000,
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
                        {
                          text: 'Xioami',
                          value: 'Xioami',
                        },
                        {
                          text: 'Realme',
                          value: 'Realme',
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
                    });
                  }
                }).then(function(res){
                    myBrand = res.value;
                    if((myBudget <= 10000) && (myBrand == "Xioami")){
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
                    else if((myBudget <= 15000) && (myBrand == "Xioami")){
                      botui.message.add({ // show a message
                        delay: 1000,
                        loading: true,
                        content: 'The Smartphones as per your selection are : <br/>\
                        <div class="p-1 row no-gutters">\
                          <div class="w-25">\
                            ![Mobile image](images/redmi-note-9.png)\
                          </div>\
                          <div class="w-75">\
                            <div class="mobDesc pl-3"><div><div>Redmi Note 9.</div>\
                                                 <div>Price : 11,999 Rs.</div>\
                                                 <div>[Buy Now!](https://www.amazon.in/Redmi-Note-Pebble-Grey-Storage/dp/B086977TR6/ref=sr_1_1?dchild=1&keywords=Redmi&qid=1602479302&refinements=p_89%3ARedmi%2Cp_36%3A1000000-1500000&rnid=1318502031&s=electronics&sr=1-1)^</div></div>\
                            </div>\
                          </div>\
                        </div>\
                        <hr/>\
                        <div class="p-1 row no-gutters">\
                          <div class="w-25">\
                            ![Mobile image](images/redmi-note-9-pro.png)\
                          </div>\
                          <div class="w-75">\
                            <div class="mobDesc pl-3"><div><div>Redmi Note 9 Pro.</div>\
                                                 <div>Price : 13,999 Rs.</div>\
                                                 <div>[Buy Now!](https://www.amazon.in/Test-Exclusive-549/dp/B077PWBC78/ref=sr_1_2?dchild=1&keywords=Redmi&qid=1602479302&refinements=p_89%3ARedmi%2Cp_36%3A1000000-1500000&rnid=1318502031&s=electronics&sr=1-2)^</div></div>\
                            </div>\
                          </div>\
                        </div>\
                        <hr/>\
                        <div class="p-1 row no-gutters">\
                          <div class="w-25">\
                            ![Mobile image](images/redmi-note-8.png)\
                          </div>\
                          <div class="w-75">\
                            <div class="mobDesc pl-3"><div><div>Redmi Note 8.</div>\
                                                 <div>Price : 12,499 Rs.</div>\
                                                 <div>[Buy Now!](https://www.amazon.in/Redmi-Note-Neptune-Blue-Storage/dp/B07X1KT6LD/ref=sr_1_4?dchild=1&keywords=Redmi&qid=1602479302&refinements=p_89%3ARedmi%2Cp_36%3A1000000-1500000&rnid=1318502031&s=electronics&sr=1-4)^</div></div>\
                            </div>\
                          </div>\
                        </div>\
                        <hr/>\
                        <div class="p-1 row no-gutters">\
                          <div class="w-25">\
                            ![Mobile image](images/redmi-y3.png)\
                          </div>\
                          <div class="w-75">\
                            <div class="mobDesc pl-3"><div><div>Redmi Y3.</div>\
                                                 <div>Price : 10,999 Rs.</div>\
                                                 <div>[Buy Now!](https://www.amazon.in/Redmi-Y3-Storage-4000mAH-Battery/dp/B07QNQPDTV/ref=sr_1_22?dchild=1&keywords=Redmi&qid=1602479302&refinements=p_89%3ARedmi%2Cp_36%3A1000000-1500000&rnid=1318502031&s=electronics&sr=1-22)^</div></div>\
                            </div>\
                          </div>\
                        </div>'
                      });
                    }
                    else if((myBudget <= 20000) && (myBrand == "Xioami")){
                      botui.message.add({ // show a message
                        delay: 1000,
                        loading: true,
                        content: 'The Smartphones as per your selection are : <br/>\
                        <div class="p-1 row no-gutters">\
                          <div class="w-25">\
                            ![Mobile image](images/redmi-note-9-pro-max.png)\
                          </div>\
                          <div class="w-75">\
                            <div class="mobDesc pl-3"><div><div>Redmi Note 9 Pro Max.</div>\
                                                 <div>Price : 18,499 Rs.</div>\
                                                 <div>[Buy Now!](https://www.amazon.in/Test-Exclusive-600/dp/B07HGBMHTR/ref=sr_1_1?dchild=1&keywords=Redmi&qid=1602486425&refinements=p_89%3ARedmi%2Cp_36%3A1500000-2000000&rnid=1318502031&s=electronics&sr=1-1)^</div></div>\
                            </div>\
                          </div>\
                        </div>\
                        <hr/>\
                        <div class="p-1 row no-gutters">\
                          <div class="w-25">\
                            ![Mobile image](images/redmi-k20.png)\
                          </div>\
                          <div class="w-75">\
                            <div class="mobDesc pl-3"><div><div>Redmi K20.</div>\
                                                 <div>Price : 19,399 Rs.</div>\
                                                 <div>[Buy Now!](https://www.amazon.in/Redmi-K20-Glacier-Storage-Exchange/dp/B082FNDQT7/ref=sr_1_13?dchild=1&keywords=Redmi&qid=1602486425&refinements=p_89%3ARedmi%2Cp_36%3A1500000-2000000&rnid=1318502031&s=electronics&sr=1-13)^</div></div>\
                            </div>\
                          </div>\
                        </div>\
                        <hr/>\
                        <div class="p-1 row no-gutters">\
                          <div class="w-25">\
                            ![Mobile image](images/redmi-note-6-pro.png)\
                          </div>\
                          <div class="w-75">\
                            <div class="mobDesc pl-3"><div><div>Redmi Note 6 Pro.</div>\
                                                 <div>Price : 15,990 Rs.</div>\
                                                 <div>[Buy Now!](https://www.amazon.in/Redmi-Note-Pro-Blue-Storage/dp/B07NL6ZMXH/ref=sr_1_15?dchild=1&keywords=Redmi&qid=1602495748&refinements=p_89%3ARedmi%2Cp_36%3A1500000-2000000&rnid=1318502031&s=electronics&sr=1-15)^</div></div>\
                            </div>\
                          </div>\
                        </div>\
                        <hr/>\
                        <div class="p-1 row no-gutters">\
                          <div class="w-25">\
                            ![Mobile image](images/redmi-note-7-pro.png)\
                          </div>\
                          <div class="w-75">\
                            <div class="mobDesc pl-3"><div><div>Redmi Note 7 Pro.</div>\
                                                 <div>Price : 17,999 Rs.</div>\
                                                 <div>[Buy Now!](https://www.amazon.in/Redmi-Note-Space-Black-128GB/dp/B07R5SC3W3/ref=sr_1_27?dchild=1&keywords=Redmi&qid=1602495975&refinements=p_89%3ARedmi%2Cp_36%3A1500000-2000000&rnid=1318502031&s=electronics&sr=1-27)^</div></div>\
                            </div>\
                          </div>\
                        </div>'
                      });
                    }
                    else if((myBudget <= 25000) && (myBrand == "Xioami")){
                      botui.message.add({ // show a message
                        delay: 1000,
                        loading: true,
                        content: 'The Smartphones as per your selection are : <br/>\
                        <div class="p-1 row no-gutters">\
                          <div class="w-25">\
                            ![Mobile image](images/redmi-k20-pro.png)\
                          </div>\
                          <div class="w-75">\
                            <div class="mobDesc pl-3"><div><div>Redmi K20 Pro.</div>\
                                                 <div>Price : 12,999 Rs.</div>\
                                                 <div>[Buy Now!](https://www.amazon.in/Redmi-K20-Pro-Carbon-Storage/dp/B082FP7T27/ref=sr_1_1?dchild=1&keywords=Redmi&qid=1602523699&refinements=p_36%3A2000000-2500000%2Cp_89%3ARedmi&rnid=3837712031&s=electronics&sr=1-1)^</div></div>\
                            </div>\
                          </div>\
                        </div>'
                    });
                  }
                  else if((myBudget >= 30000) && (myBrand == "Xioami")){
                    botui.message.add({ // show a message
                      delay: 1000,
                      loading: true,
                      content: 'The Smartphones as per your selection are : <br/>\
                      <div class="p-1 row no-gutters">\
                        <div class="w-25">\
                          ![Mobile image](images/mi-10.png)\
                        </div>\
                        <div class="w-75">\
                          <div class="mobDesc pl-3"><div><div>Mi 10.</div>\
                                               <div>Price : 49,999 Rs.</div>\
                                               <div>[Buy Now!](https://www.amazon.in/Test-A6010-Dummy-Asin_39/dp/B07WZG2YR3/ref=sr_1_2?dchild=1&keywords=mi+10&qid=1602524323&sr=8-2)^</div></div>\
                          </div>\
                        </div>\
                      </div>'
                  });
                }
                else if((myBudget <= 10000) && (myBrand == "Realme")){
                  botui.message.add({ // show a message
                    delay: 1000,
                    loading: true,
                    content: 'The Smartphones as per your selection are : <br/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-c3.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme C3.</div>\
                                             <div>Price : 8,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-c3-frozen-blue-32-gb/p/itm58bf81a807d66?pid=MOBFZHC5HAGKGBBW&lid=LSTMOBFZHC5HAGKGBBWJH2HLH&marketplace=FLIPKART&srno=s_1_1&otracker=search&fm=SEARCH&iid=0e3fc0a5-e1c8-47b3-8181-f738e89b9949.MOBFZHC5HAGKGBBW.SEARCH&ppt=browse&ppn=browse&ssid=mtc65yan8g0000001602555844184&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-narzo-10a.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme Narzo 10A.</div>\
                                             <div>Price : 9,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-narzo-10a-so-blue-64-gb/p/itmbeb412dade152?pid=MOBFSZTTDGNMFRYD&lid=LSTMOBFSZTTDGNMFRYDUNPGPY&marketplace=FLIPKART&srno=s_1_8&otracker=search&fm=SEARCH&iid=0e3fc0a5-e1c8-47b3-8181-f738e89b9949.MOBFSZTTDGNMFRYD.SEARCH&ppt=browse&ppn=browse&ssid=mtc65yan8g0000001602555844184&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-narzo-20a.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme Narzo 20A.</div>\
                                             <div>Price : 9,499 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-narzo-20a-victory-blue-64-gb/p/itmca0d14f41a891?pid=MOBFVEATJNCZG2QD&lid=LSTMOBFVEATJNCZG2QD9QHKVF&marketplace=FLIPKART&srno=s_1_16&otracker=search&fm=SEARCH&iid=0e3fc0a5-e1c8-47b3-8181-f738e89b9949.MOBFVEATJNCZG2QD.SEARCH&ppt=browse&ppn=browse&ssid=mtc65yan8g0000001602555844184&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-c15.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme C15.</div>\
                                             <div>Price : 9,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-c15-power-blue-32-gb/p/itm70ebdb8a0fbdf?pid=MOBFUEPQUYDNJFAG&lid=LSTMOBFUEPQUYDNJFAG6IMWCO&marketplace=FLIPKART&srno=s_1_15&otracker=search&fm=SEARCH&iid=0e3fc0a5-e1c8-47b3-8181-f738e89b9949.MOBFUEPQUYDNJFAG.SEARCH&ppt=browse&ppn=browse&ssid=mtc65yan8g0000001602555844184&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>'
                });
                }
                else if((myBudget <= 15000) && (myBrand == "Realme")){
                  botui.message.add({ // show a message
                    delay: 1000,
                    loading: true,
                    content: 'The Smartphones as per your selection are : <br/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-5i.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme 5i.</div>\
                                             <div>Price : 11,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-5i-aqua-blue-128-gb/p/itmdac0da867a9fa?pid=MOBFP6W584RNB3HH&lid=LSTMOBFP6W584RNB3HHZYHA7A&marketplace=FLIPKART&srno=s_1_1&otracker=search&fm=SEARCH&iid=b58f5764-3b27-4713-851a-8503f0971428.MOBFP6W584RNB3HH.SEARCH&ppt=browse&ppn=browse&ssid=isl0u8nnm80000001602558490602&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-6i.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme 6i.</div>\
                                             <div>Price : 13,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-6i-eclipse-black-64-gb/p/itm0201cc97a2f61?pid=MOBFTAYNHQKJAPYF&lid=LSTMOBFTAYNHQKJAPYFJJT6ZI&marketplace=FLIPKART&srno=s_1_3&otracker=search&fm=SEARCH&iid=b58f5764-3b27-4713-851a-8503f0971428.MOBFTAYNHQKJAPYF.SEARCH&ppt=browse&ppn=browse&ssid=isl0u8nnm80000001602558490602&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-6.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme 6.</div>\
                                             <div>Price : 14,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-6-comet-blue-64-gb/p/itma64226eb3e2d2?pid=MOBFTAZ5CXWPRYKW&lid=LSTMOBFTAZ5CXWPRYKWM7V5HX&marketplace=FLIPKART&srno=s_1_5&otracker=search&fm=SEARCH&iid=b58f5764-3b27-4713-851a-8503f0971428.MOBFTAZ5CXWPRYKW.SEARCH&ppt=browse&ppn=browse&ssid=isl0u8nnm80000001602558490602&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-narzo-20-pro.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme Narzo 20 Pro.</div>\
                                             <div>Price : 14,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-narzo-20-pro-white-knight-64-gb/p/itm043c480bf22fb?pid=MOBFVEATHFZNHMWU&lid=LSTMOBFVEATHFZNHMWUFDCRN9&marketplace=FLIPKART&srno=s_1_16&otracker=search&fm=SEARCH&iid=b58f5764-3b27-4713-851a-8503f0971428.MOBFVEATHFZNHMWU.SEARCH&ppt=browse&ppn=browse&ssid=isl0u8nnm80000001602558490602&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>'
                });
                }
                else if((myBudget <= 20000) && (myBrand == "Realme")){
                  botui.message.add({ // show a message
                    delay: 1000,
                    loading: true,
                    content: 'The Smartphones as per your selection are : <br/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-6-pro.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme 6 Pro.</div>\
                                             <div>Price : 17,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-6-pro-lightning-red-64-gb/p/itmdddfecb342592?pid=MOBFPCX72FRDVFKB&lid=LSTMOBFPCX72FRDVFKBBVZBTU&marketplace=FLIPKART&srno=s_1_2&otracker=search&fm=SEARCH&iid=d40f53d4-c5f6-43c4-90f9-02eaf7328684.MOBFPCX72FRDVFKB.SEARCH&ppt=browse&ppn=browse&ssid=08libkr0k00000001602653205459&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-x2.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme X2.</div>\
                                             <div>Price : 17,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431?pid=MOBFMXTSHFVBU7UD&lid=LSTMOBFMXTSHFVBU7UDCPO4AN&marketplace=FLIPKART&srno=s_1_13&otracker=search&fm=SEARCH&iid=d40f53d4-c5f6-43c4-90f9-02eaf7328684.MOBFMXTSHFVBU7UD.SEARCH&ppt=browse&ppn=browse&ssid=08libkr0k00000001602653205459&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-7.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme 7.</div>\
                                             <div>Price : 16,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-7-mist-blue-128-gb/p/itme55d08631f19b?pid=MOBFUYUN2YDKVEHE&lid=LSTMOBFUYUN2YDKVEHERJDMVV&marketplace=FLIPKART&srno=s_1_15&otracker=search&fm=SEARCH&iid=d40f53d4-c5f6-43c4-90f9-02eaf7328684.MOBFUYUN2YDKVEHE.SEARCH&ppt=browse&ppn=browse&ssid=08libkr0k00000001602653205459&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-7-pro.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme 7 Pro.</div>\
                                             <div>Price : 19,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-7-pro-mirror-silver-128-gb/p/itm72f96fb9b13c3?pid=MOBFUYUNBFV7PZZV&lid=LSTMOBFUYUNBFV7PZZVX4DOZD&marketplace=FLIPKART&srno=s_1_17&otracker=search&fm=SEARCH&iid=d40f53d4-c5f6-43c4-90f9-02eaf7328684.MOBFUYUNBFV7PZZV.SEARCH&ppt=browse&ppn=browse&ssid=08libkr0k00000001602653205459&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>'
                });
                }
                else if((myBudget <= 25000) && (myBrand == "Realme")){
                  botui.message.add({ // show a message
                    delay: 1000,
                    loading: true,
                    content: 'The Smartphones as per your selection are : <br/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-x.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme X.</div>\
                                             <div>Price : 20,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-x-space-blue-128-gb/p/itmfgybqzcgbxs26?pid=MOBFGYBQY2YQY9GY&lid=LSTMOBFGYBQY2YQY9GYGXR1YM&marketplace=FLIPKART&srno=s_1_7&otracker=search&fm=SEARCH&iid=2b975921-16e4-47c1-b60b-757e781a559e.MOBFGYBQY2YQY9GY.SEARCH&ppt=browse&ppn=browse&ssid=g0147j53g00000001603208583112&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-X3.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme X3.</div>\
                                             <div>Price : 22,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-x3-glacier-blue-128-gb/p/itm325a6e0c17b0a?pid=MOBFSS3QABH9YKVE&lid=LSTMOBFSS3QABH9YKVE40F8K4&marketplace=FLIPKART&srno=s_1_3&otracker=search&fm=SEARCH&iid=2b975921-16e4-47c1-b60b-757e781a559e.MOBFSS3QABH9YKVE.SEARCH&ppt=browse&ppn=browse&ssid=g0147j53g00000001603208583112&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-x3-superzoom.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme X3 SuperZoom.</div>\
                                             <div>Price : 24,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-x3-superzoom-glacier-blue-128-gb/p/itm7e4d21f06e37e?pid=MOBFSS3Q9UFUZ9BZ&lid=LSTMOBFSS3Q9UFUZ9BZZSPEHT&marketplace=FLIPKART&srno=s_1_6&otracker=search&fm=SEARCH&iid=2b975921-16e4-47c1-b60b-757e781a559e.MOBFSS3Q9UFUZ9BZ.SEARCH&ppt=browse&ppn=browse&ssid=g0147j53g00000001603208583112&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>'
                });
                }
                else if((myBudget >= 30000) && (myBrand == "Realme")){
                  botui.message.add({ // show a message
                    delay: 1000,
                    loading: true,
                    content: 'The Smartphones as per your selection are : <br/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-x2-pro.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme X2 Pro.</div>\
                                             <div>Price : 35,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-x2-pro-lunar-white-256-gb/p/itma3203d88190a3?pid=MOBFM2WZ5JEKKM9T&lid=LSTMOBFM2WZ5JEKKM9TIIU9OC&marketplace=FLIPKART&srno=s_1_1&otracker=search&fm=SEARCH&iid=312ebcb7-4416-4225-8aee-9e002260faed.MOBFM2WZ5JEKKM9T.SEARCH&ppt=browse&ppn=browse&ssid=apwuw9yngg0000001604989032213&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>\
                    <hr/>\
                    <div class="p-1 row no-gutters">\
                      <div class="w-25">\
                        ![Mobile image](images/realme-x50-pro.png)\
                      </div>\
                      <div class="w-75">\
                        <div class="mobDesc pl-3"><div><div>Realme X50 Pro.</div>\
                                             <div>Price : 40,999 Rs.</div>\
                                             <div>[Buy Now!](https://www.flipkart.com/realme-x50-pro-moss-green-256-gb/p/itm13d1770db35a3?pid=MOBFP6WYFBVHDHY8&lid=LSTMOBFP6WYFBVHDHY8GUPJMY&marketplace=FLIPKART&srno=s_1_5&otracker=search&fm=SEARCH&iid=312ebcb7-4416-4225-8aee-9e002260faed.MOBFP6WYFBVHDHY8.SEARCH&ppt=browse&ppn=browse&ssid=apwuw9yngg0000001604989032213&qH=5b198c91d136319b)^</div></div>\
                        </div>\
                      </div>\
                    </div>'
                  });
                }
               // Realme Section Ends here
               // Samsung Section Starts here
               else if((myBudget <= 10000) && (myBrand == "Samsung")){
                 botui.message.add({ // show a message
                   delay: 1000,
                   loading: true,
                   content: 'The Smartphones as per your selection are : <br/>\
                   <div class="p-1 row no-gutters">\
                     <div class="w-25">\
                       ![Mobile image](images/realme-c3.png)\
                     </div>\
                     <div class="w-75">\
                       <div class="mobDesc pl-3"><div><div>Samsung M01 core.</div>\
                                            <div>Price : 7,299 Rs.</div>\
                                            <div>[Buy Now!](https://www.flipkart.com/samsung-m01-core-black-32-gb/p/itm608a437cc6d05?pid=MOBFUAEBGXVGX5US&lid=LSTMOBFUAEBGXVGX5USBQ1AQZ&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=a21e53b2-ba54-4f44-8067-6e0a8808e34c.MOBFUAEBGXVGX5US.SEARCH&ppt=sp&ppn=sp&ssid=kswux0i7w00000001604989789908&qH=3910b1e0ccab19bc)^</div></div>\
                       </div>\
                     </div>\
                   </div>'
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
