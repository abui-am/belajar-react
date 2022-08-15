import React, { Component, Fragment, useEffect, useState } from 'react';
import useHelloFramework from '../hooks/useHelloWorld';

const Counter = () => {
  const [color, setColor] = useState('');
  const [isDeleted, setDeleted] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (color === 'red') {
      alert('Kamu memilih warna merah');
    }
  }, [
    // Sesuattu yang nyebabin useEfefct ini dipanggil lagi
    color,
    isDeleted,
  ]);

  if (isDeleted) return '';

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setColor('red');
            setDeleted(true);
          }}
        >
          Button Merah
        </button>
        <button
          onClick={() => {
            setColor('green');
          }}
        >
          Button Hijau
        </button>

        <button
          onClick={() => {
            setColor('yellow');
          }}
        >
          Button Kuning
        </button>
      </div>
    </div>
  );
};

// class Header extends React.Component {
//   componentWillUnmount() {
//     alert('The component named Header is about to be unmounted.');
//   }
//   render() {
//     return <h1>Hello World!</h1>;
//   }
// }

// class Unmount extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: true };
//   }
//   delHeader = () => {
//     this.setState({ show: false });
//   };
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Header />;
//     }
//     return (
//       <div>
//         {myheader}
//         <button type='button' onClick={this.delHeader}>
//           Delete Header
//         </button>
//       </div>
//     );
//   }
// }

const Lifecycle = () => {
  const [isDeleted, setDeleted] = useState(false);
  const { hello } = useHelloFramework('React');
  const { hello: helloLaravel } = useHelloFramework('Laravel');

  useEffect(
    () => {
      console.log('mount');
    },
    [
      // Apa aja yang nyebabin function ini dipanggil lgi
    ]
  );

  return (
    <Fragment>
      Lifecycle
      <Counter />
      {!isDeleted && <UnmountingExample />}
      <button
        onClick={() => {
          hello();
        }}
      >
        Hello React
      </button>
      <button
        onClick={() => {
          helloLaravel();
        }}
      >
        Hello Laravel
      </button>
    </Fragment>
  );
};

const UnmountingExample = () => {
  useEffect(() => {
    return () => {
      alert('Berhasil di unmount');
    };
  }, []);
  return <div>Contoh unmounting</div>;
};

export default Lifecycle;
