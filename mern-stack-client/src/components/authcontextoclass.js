import React from 'react';

export const LocaleContext = React.createContext();

class LocaleProvider extends React.Component {
  constructor(props) {
    super(props);

    // -- metodo ---
    this.changeLocale = () => {
      this.setState(state => {
        const newLocale = "Sao paulo";
        return {
          locale: newLocale
        };
      });
    };

    this.state = {
      locale: 'Brazil',
      changeLocale: this.changeLocale
    };
  }

  render() {
    return (
      <LocaleContext.Provider value={this.state}>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

export default LocaleProvider;