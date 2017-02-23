interface Poyo {
  a: number;
}

interface Poyo2 {
  b: string;
}

const abc = (a:any): a is Poyo2 => {
            return true;
          }

const def = (a: any) => {
  return true;
}

const nnn = (ddd: Poyo | Poyo2) => {
  if (abc(ddd)) {
    ddd.b.replace('22','')
  }

  if (def(ddd)) {
    const nyan: Poyo = (ddd as any) as Poyo
    const gyan: string = ddd.toString();
  }
}

