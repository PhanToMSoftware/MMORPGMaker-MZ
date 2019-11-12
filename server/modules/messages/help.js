exports.initialize = function(io) {
  exports.use = function(args, initiator) {
    MMO_Core["socket"].modules["messages"].sendToPlayer(initiator, "System", "---- Available commands :");
    MMO_Core["socket"].modules["messages"].sendToPlayer(initiator, "System", "/changePassword [old] [new]"); 
    MMO_Core["socket"].modules["messages"].sendToPlayer(initiator, "System", "/findUser [username]"); 
    MMO_Core["socket"].modules["messages"].sendToPlayer(initiator, "System", "/givegold [username] [amount]"); 
    MMO_Core["socket"].modules["messages"].sendToPlayer(initiator, "System", "/kick [username] (only admin)");    
  }
}