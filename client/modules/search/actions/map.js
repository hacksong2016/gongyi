export default {
  getProvinceCount({Meteor},callback){
    Meteor.call('kids.getProvinceCount',(err,res)=>{
      if(err){
        console.log(err);
      }else{
        callback(res);
      }
    })
  }
}
