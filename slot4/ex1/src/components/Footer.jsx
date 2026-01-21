function Footer({ myProfile }) {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        
        <img
          src={myProfile.avatar}
          alt="Avatar"
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
        />
        <h5>{myProfile.name}</h5>
        <p>{myProfile.email}</p>
      </div>
    </footer>
  );
}

export default Footer;