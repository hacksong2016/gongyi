export default {
  helpKids({Meteor},kidsId){
    Meteor.call('kids.helpMe',kidsId,(err,res)=>{
      if(err){
        console.log(err);
      }
    })
  }
}
