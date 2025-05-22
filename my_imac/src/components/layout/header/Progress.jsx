import React, { useEffect, useState } from 'react';
import './Progress.css';

function Progress() {
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
		<div id="progress" className="progress">
			<div className="progress-title">
				<span>
					BILLION SOUL<sup>®</sup> HARVEST UPDATES
				</span>
			</div>

			{/* New Banner Style */}
			<div className="progress-bars">
				<div className="bar saved">
					<div className="left">
						<div className="bar-texts">
							<span>september 2005</span>
							<span>1st Billion</span>
						</div>
					</div>

					<div className="right">
						<div className="bar-texts">
							<span>
								Progress: {peopleSaved.toLocaleString()}
							</span>
							<span>people saved</span>
						</div>
						<div className="bar-texts">
							<span> Second Billion ® </span>
						</div>
					</div>
				</div>

				<div className="bar churches">
					<div className="left">
						<div className="bar-texts">
							<span>0 Churches</span>
						</div>
					</div>
					<div className="right">
						<div className="bar-texts">
							<span>Progress: {churches.toLocaleString()}</span>
						</div>
						<div className="bar-texts">
							<span> 5 Million </span>
						</div>
					</div>
				</div>
			</div>

		</div>
  );
}

export default Progress;
