import React from 'react';

const OrbitalDiagram: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none select-none">
      <div className="relative w-[600px] h-[600px]">
        {/* Python Logo in Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full p-2 backdrop-blur-sm">
          <img
            src="/img/python.webp"
            alt="Python"
            className="w-full h-full"
          />
        </div>
        
        {/* Inner Orbit - FastAPI */}
        <div className="absolute inset-0 animate-[spin_25s_linear_infinite_reverse]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-purple-500/20 rounded-full" />
          <div className="absolute top-[2%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <img
              src="/img/fastapi.webp"
              alt="FastAPI"
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Second Orbit - Flask & Redis */}
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-blue-500/20 rounded-full" />
          <div className="absolute top-[3%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <img
              // src="https://camo.githubusercontent.com/d5c8cf1b8caa39cbdbf96fae843b392da4e51289818d277216103948b838e721/68747470733a2f2f656e637279707465642d74626e302e677374617469632e636f6d2f696d616765733f713d74626e3a414e64394763523541474f70344c7834624d564c477467364156657848633137445f576b71676e4d69707677345648696d456157484e6e4164454f7461573879493248415a395f5366556f26757371703d434155"
              src='/img/flask.webp'
              alt="Flask"
              className="w-full h-full"
            />
          </div>
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <img
              src='/img/redis.webp'
              alt="Redis"
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Third Orbit - PostgreSQL, Prometheus & Docker */}
        <div className="absolute inset-0 animate-[spin_30s_linear_infinite_reverse]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] border border-green-500/20 rounded-full" />
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <img
              src='/img/postgres.webp'
              alt="PostgreSQL"
              className="w-full h-full"
            />
          </div>
          <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg"
              alt="Prometheus"
              className="w-full h-full"
            />
          </div>
          <div className="absolute left-0 top-[70%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <img
              src='/img/docker.webp'
              alt="Docker"
              className="w-full h-full brightness-200"
            />
          </div>
        </div>
        
        {/* Outer Orbit - GitHub & GitLab */}
        <div className="absolute inset-0 animate-[spin_35s_linear_infinite]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-blue-500/20 rounded-full" />
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <img
              src='/img/github.webp'
              alt="GitHub"
              className="w-full h-full brightness-200"
            />
          </div>
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <img
              src='/img/gitlab.webp'
              alt="GitLab"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitalDiagram;