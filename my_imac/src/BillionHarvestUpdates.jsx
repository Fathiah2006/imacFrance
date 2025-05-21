import React, { useEffect, useState } from 'react';
import './BillionHarvestUpdates.css';

function BillionHarvestUpdates() {
  const firstTarget = 2000000000;
  const churchTarget = 5000000;

  const [peopleSaved, setPeopleSaved] = useState(1253888689);
  const [churches, setChurches] = useState(4087968);

  useEffect(() => {
    const interval = setInterval(() => {
      setPeopleSaved(prev => Math.min(prev + Math.floor(Math.random() * 10 + 1), firstTarget));
      setChurches(prev => Math.min(prev + Math.floor(Math.random() * 2), churchTarget));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const firstPercent = (peopleSaved / firstTarget) * 100;
  const churchPercent = (churches / churchTarget) * 100;

  return (
    <div className="billion-harvest-updates">
      <div className="title">BILLION SOUL<sup>®</sup> HARVEST UPDATES</div>

      {/* New Banner Style */}
      <div className="progress-banner">
        <div className="banner-section">
          <div className="banner-item">
            PEOPLE SAVED: <span>{peopleSaved.toLocaleString()}</span>
          </div>
          <div className="banner-item">
            CHURCHES PLANTED: <span>{churches.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillionHarvestUpdates;
