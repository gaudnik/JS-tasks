function indexOf(head, value) {
  let i = 0
  while (head !== null) {
    if(head.data === value)
    return i;
    head = head.next
    ++i
  }
  return -1;
}
