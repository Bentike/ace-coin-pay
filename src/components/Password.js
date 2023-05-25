import Header from "./Header";

const Password = () => {
  return (
    <div className="cvv-wrap">
     <Header title="Password" text="Enter your Dynamic pasword"/>
      <div>
        <input type="password" placeholder="327547ete" />
      </div>
    </div>
  );
};

export default Password;