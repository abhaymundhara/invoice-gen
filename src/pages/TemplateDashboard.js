import React, { useEffect, useState } from "react";

const TemplateDashboard = () => {
  const [templates, setTemplates] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/templates/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Templates fetched:", data);
        setTemplates(data);
      });
  }, []);

  const generateInvoice = async (templateId) => {
    try {
      const response = await fetch("http://localhost:8000/invoices/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ template_id: templateId }),
      });

      const data = await response.json();

      if (response.ok) {
        const clientEmail = data.client || "client";
        setMessage(`✅ Invoice sent to ${clientEmail}`);
      } else {
        console.error("Backend error response:", data);
        setMessage("❌ Failed to generate invoice");
      }
    } catch (err) {
      console.error("Invoice generation error:", err);
      setMessage("❌ Error connecting to server");
    }
  };

  return (
    <div className="bg-background min-h-screen text-white px-8 py-10">
      <h2 className="text-3xl font-bold mb-6">
        <span role="img" aria-label="folder">📂</span> Your Templates
    </h2>

      {message && <p className="mb-4 text-accent font-semibold">{message}</p>}

      <div className="space-y-4">
        {templates.length === 0 && <p>No templates available.</p>}
        {templates.map((t) => (
          <div
            key={t.id}
            className="bg-surface p-5 rounded-xl shadow-md flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{t.description}</p>
              <p className="text-sm text-gray-400">${t.amount} • Due day: {t.due_day}</p>
            </div>
            <button
              onClick={() => generateInvoice(t.id)}
              className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            >
              Generate Invoice
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateDashboard;
