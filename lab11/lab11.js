const crypto = require("crypto");
const { performance } = require("perf_hooks");

function hashWithSHA256(message) {
  if (!message) {
    throw new Error("Message is required");
  }

  const startTime = performance.now();
  const hash = crypto.createHash("sha256").update(message).digest("hex");
  const endTime = performance.now();

  const hashingTime = endTime - startTime;
  const length = hash.length / 2;

  return { hash, length, hashingTime };
}

function hashWithMD5(message) {
  if (!message) {
    throw new Error("Message is required");
  }

  const startTime = performance.now();
  const hash = crypto.createHash("md5").update(message).digest("hex");
  const endTime = performance.now();

  const hashingTime = endTime - startTime;
  const length = hash.length / 2;

  return { hash, length, hashingTime };
}

// Example usage:
const message = "Gurina Kristina Sergeevna";
try {
  console.log("Message: " + message);
  const shaResult = hashWithSHA256(message);
  console.log("SHA-256 Hash:", shaResult.hash);
  console.log("Length:", shaResult.length);
  console.log("Hashing Time (ms):", shaResult.hashingTime);

  console.log("Message: " + message);
  const md5Result = hashWithMD5(message);
  console.log("MD5 Hash:", md5Result.hash);
  console.log("Length:", md5Result.length);
  console.log("Hashing Time (ms):", md5Result.hashingTime);
} catch (error) {
  console.error(error.message);
}
