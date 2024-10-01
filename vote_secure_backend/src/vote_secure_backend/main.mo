actor VoteSecure {
  // Data Structure for storing voters info
  stable var voters: [Text] = [];
  stable var votes: [(Text, Text)] = [];

  // Function to register voters
  func registerVoter(voterId: Text): async Bool {
    if (voters.contains(voterId)) {
      return false;
    } else {
      voters := Array.append(voters, [voterId]);
      return true;
    }
  }

  // Function to authenticate voter
  func authenticateVoter(voterId: Text): async Bool {
    return voters.contains(voterId);
  }

  // Function to cast and store votes
  func castVote(voterId: Text, vote: Text): async Bool {
    if (!authenticateVoter(voterId)) {
      return false;
    } else {
      votes := Array.append(votes, [(voterId, vote)]);
      return true;
    }
  }
  
  // Function to retrieve votes
  func getVotes(): async [(Text, Text)] {
    return votes;
  }
};
