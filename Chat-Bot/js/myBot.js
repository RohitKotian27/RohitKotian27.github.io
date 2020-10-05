var botui = new BotUI('my-botui-app');
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
          content: 'Hi ' + res.value + '<br/> Can I ask you a question?'
        });
    }).then(function(res){
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
                loading: true,
                content: 'Thank you for being an interactive user.'
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
