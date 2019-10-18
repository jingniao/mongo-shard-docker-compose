rs.initiate(
   {
      _id: "shard03",
      version: 1,
      members: [
         { _id: 0, host : "shard03a:27020" }
      ]
   }
)
