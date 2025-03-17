import React from "react";
import Image from "next/image";

const OrbitalDiagram: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none select-none">
      <div className="relative w-[600px] h-[600px]">
        {/* Python Logo in Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full p-2 backdrop-blur-sm">
          <div className="relative w-full h-full">
            <Image
              src="img/python.webp"
              alt="Python"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        
        {/* Inner Orbit - FastAPI */}
        <div className="absolute inset-0 animate-[spin_25s_linear_infinite_reverse]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-purple-500/20 rounded-full" />
          <div className="absolute top-[2%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="img/fastapi.webp"
                alt="FastAPI"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        
        {/* Second Orbit - Flask & Redis */}
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-blue-500/20 rounded-full" />
          <div className="absolute top-[3%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="img/flask.webp"
                alt="Flask"
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="img/redis.webp"
                alt="Redis"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        
        {/* Third Orbit - PostgreSQL, Prometheus & Docker */}
        <div className="absolute inset-0 animate-[spin_30s_linear_infinite_reverse]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] border border-green-500/20 rounded-full" />
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="img/postgres.webp"
                alt="PostgreSQL"
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg"
                alt="Prometheus"
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute left-0 top-[70%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="img/docker.webp"
                alt="Docker"
                fill
                objectFit="contain"
                className="brightness-200"
              />
            </div>
          </div>
        </div>
        
        {/* Outer Orbit - GitHub & GitLab */}
        <div className="absolute inset-0 animate-[spin_35s_linear_infinite]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-blue-500/20 rounded-full" />
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="img/github.webp"
                alt="GitHub"
                fill
                objectFit="contain"
                className="brightness-200"
              />
            </div>
          </div>
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white/5 rounded-lg p-2 backdrop-blur-sm">
            <div className="relative w-full h-full">
              <Image
                src="img/gitlab.webp"
                alt="GitLab"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitalDiagram;