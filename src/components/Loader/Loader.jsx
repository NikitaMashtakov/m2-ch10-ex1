import { Component } from 'react';

export class Loader extends Component {
  render() {
    return (
      <span
        // className={styles.loader}
        className="m-auto mt-5 w-12 h-12 rounded-full inline-block border-t-4 border-t-[#6ebeff] border-r-4 border-r-transparent animate-spin"
      />
    );
  }
}
