const que = require('./Utility/QUsingLinkedList');
const q = new que.QLinkedList();


q.enQueElement(12);
q.enQueElement(10);
q.enQueElement(134);
q.enQueElement(106);
q.enQueElement(1043);
q.enQueElement(1024);
q.enQueElement(1023);
q.enQueElement(1013);
q.enQueElement(10134);

console.log(q.deQueElement());
