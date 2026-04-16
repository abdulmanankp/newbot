const instances = parseInt(process.env.INSTANCES || "1", 10);

const url = `https://join.mslpakistan.org`;
const interval = 600000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log("website reloded");
    })
    .catch((error) => {
      console.error(`Error : ${error.message}`);
    });
}
module.exports = {
  apps: [
    {
      name: "whatsway",
      script: "./dist/index.js",
      instances: instances,
      exec_mode: instances > 1 ? "cluster" : "fork",
      instance_var: "NODE_APP_INSTANCE",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
      },
      max_memory_restart: "1500M",
      restart_delay: 1000,
      max_restarts: 10,
      kill_timeout: 5000,
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      log_file: "./logs/pm2-combined.log",
      time: true,
    },
  ],
};
