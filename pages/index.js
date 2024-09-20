import Times from "../src/components/Times";
import Count from "../src/components/Count";
import useEffect from 

export default function Home() {
  return (
    <div>
      <Times />
      <Count />
    </div>
  );
}



function Times () {
  return <div classname='Times'>TIMES</div>
}

function Click () {
  return <div classname='Count'>CLICK</div>
}