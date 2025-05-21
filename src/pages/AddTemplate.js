import React, { useEffect, useState } from "react";

const AddTemplate = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    client_id: "",
    description: "",
    amount: "",
    due_day: 1,
    frequency: "monthly",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/clients/")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/templates/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        amount: parseFloat(form.amount),
        due_day: parseInt(form.due_day),
        user_id: 1,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage("✅ Template created!");
      setForm({
        client_id: "",
        description: "",
        amount: "",
        due_day: 1,
        frequency: "monthly",
      });
    } else {
      setMessage("❌ Error: " + (data?.error || "unknown"));
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Add Invoice Template</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="client_id"
          value={form.client_id}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Select a Client</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>

        <input
          name="description"
          placeholder="Work Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="due_day"
          type="number"
          placeholder="Due Day (1-31)"
          value={form.due_day}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="frequency"
          value={form.frequency}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>

        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Save Template
        </button>
      </form>

      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
};

export default AddTemplate;
