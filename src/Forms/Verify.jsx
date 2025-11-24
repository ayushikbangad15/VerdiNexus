import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Verify() {
  const query = useQuery();
  const token = query.get("token");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/verify?token=${token}`)
      .then(res => alert(res.data))
      .catch(err => alert("Verification failed."));
  }, [token]);

  return <div>Verifying your email...</div>;
}

export default Verify;
