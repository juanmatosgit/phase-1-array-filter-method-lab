function findMatching(source, sought) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
  }