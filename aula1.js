
const numero = 11
const Par = (numero % 2) === 0;

/*
if (Par) {
   console.log('número Par');
} else if (!Par){
    console.log('número Ímpar');
}
*/

const precoNormal = 100;
const formaPag = 3;
const dezPorCento = precoNormal - (precoNormal * 0.1);
const quinzePorCento = precoNormal - (precoNormal * 0.15);
const maisDezPorCento = precoNormal + (precoNormal * 0.1);

if(formaPag === 1){
  console.log("R$"+dezPorCento);
}else if (formaPag === 2){
    console.log("R$"+quinzePorCento);
  }else if ( formaPag === 3){
    console.log("R$"+precoNormal);
  }else{
    console.log("R$"+maisDezPorCento);
    
  }

