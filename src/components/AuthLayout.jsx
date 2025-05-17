import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Redirect based on authentication requirement and current status
    if (authentication && !authStatus) {
      navigate("/login");
    } else if (!authentication && authStatus) {
      navigate("/");
    } else {
      setLoading(false); // Only allow rendering when the route is appropriate
    }
  }, [authStatus, authentication, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 text-xl font-medium text-gray-600">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}
