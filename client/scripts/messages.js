var Messages = {
    chats: {},
    // addMessages: function (data) {
    //     for (let i = 0; i < data.length; i++) {
    //         this.chats.push({ username: data[i]['username'], text: data[i]['text'], roomname: data[i]['roomname'] });
    //     }
    //     // console.log(data);
    // }
    add: function(message) {
      Messages.chats[message.objectId] = message;
    },

    update: function(messages) {
        for (let message of messages) {
          Messages.chats[message.objectId] = message;
        }
    }
}