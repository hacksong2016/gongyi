export default {
  getProvinceCount({Meteor},callback,query){
    Meteor.call('kids.getProvinceCount',query,(err,res)=>{
      if(err){
        console.log(err);
      }else{
        callback(res);
      }
    })
  }
}
