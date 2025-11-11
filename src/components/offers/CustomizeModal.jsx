// src/components/CustomizeModal.jsx
import React, { useState } from "react";
import "./CustomizeModal.css";

const CustomizeModal = ({ item, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const maxSelections = 4;

  if (!item) return null;

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else if (selectedOptions.length < maxSelections) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const totalPrice =
    item.basePrice +
    selectedOptions.length * (item.extraPrice || 0.5);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <img src={item.img} alt={item.title} className="food-image" />
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <h2>Customize your {item.title}</h2>
          <p className="limit-text">
            Please select up to {maxSelections} options free!
          </p>

          {/* Sections in grid/table layout */}
          {item.customizations.map((section, idx) => (
            <div key={idx} className="custom-section">
              <h3>{section.name}</h3>
              <table className="custom-table">
                <tbody>
                  {section.options.reduce((rows, option, i) => {
                    if (i % 3 === 0) rows.push([]);
                    rows[rows.length - 1].push(option);
                    return rows;
                  }, []).map((row, rIndex) => (
                    <tr key={rIndex}>
                      {row.map((option, cIndex) => (
                        <td key={cIndex}>
                          <label className="table-option">
                            <input
                              type="checkbox"
                              checked={selectedOptions.includes(option)}
                              onChange={() => toggleOption(option)}
                            />
                            {option}
                          </label>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <div className="total">Total to pay: £{totalPrice.toFixed(2)}</div>
          <div className="footer-buttons">
            <button onClick={onClose} className="back-btn">
              Take me back
            </button>
            <button className="next-btn">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeModal;
