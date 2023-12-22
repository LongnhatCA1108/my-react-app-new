import * as React from 'react';

export interface UserProps {
    id: number,
    name: string,
}

export default function User (props: UserProps) {
    const { id ,name} = props;
  return (
    <div>
      <p>hello {name}, your id is: {id} </p>
    </div>
  );
}
