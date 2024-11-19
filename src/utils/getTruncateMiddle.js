

export function truncateMiddle(text, startLength, endLength) {
    if (text.length <= startLength + endLength) return text;
    return (
      text.slice(0, startLength) +
      "..." +
      text.slice(text.length - endLength, text.length)
    );
  }
  