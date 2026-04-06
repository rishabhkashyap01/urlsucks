import { counter } from '../db/schema.js';

export const getNextId = async(name ) => {
    const result = await counter.findOneAndUpdate(
        {_id:name},
        {$inc: {seq:1}},
        {new :true, upsert:true}
    );

    return result.seq;
} 