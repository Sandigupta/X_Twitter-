import mongoose  from "mongoose";


const likeSchema = new mongoose.Schema({
    onModel: {
        type: 'string',
        require: true,
        enum:['tweet','comment']
    },
    
    like: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'onModel',
        require:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require:true
    }

},{timestamp:true})

const Like = mongoose.model('Like', likeSchema);

export default Like;