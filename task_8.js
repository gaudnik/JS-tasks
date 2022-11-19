// const sentence = list => (
//     list
//       .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
//       .map(obj => Object.values(obj)[0])
//       .join(' ')
//   );

function sentence(list){
    list.sort((a,b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map(obj => Object.values(obj)[0]).join(' ')
}