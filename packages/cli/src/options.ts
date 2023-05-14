import { bundlerHandler } from "./handler"
import { CliCommand, CliCommandOptions } from "./util"
import { IBundlerArgsInput } from "@alto/config"

export const bundlerOptions: CliCommandOptions<IBundlerArgsInput> = {
    loki: {
        host: {
            description: "Loki host",
            type: "string"
        },
        username: {
            description: "Loki username",
            type: "string"
        },
        password: {
            description: "Loki password",
            type: "string"
        }
    },
    signer: {
        privateKeys: {
            description: "Private key of the signer",
            type: "string",
            require: true
        },
        utilityKey: {
            description: "Private key of the utility account",
            type: "string",
            require: true
        },
        maxSigners: {
            description: "Maximum number of signers to use from the list of signer private keys",
            type: "number"
        },
        minBalance: {
            description: "Minimum balance required for the signer",
            type: "string",
            require: true
        }
    },
    relay: {
        rpcUrl: {
            description: "RPC url to connect to",
            type: "string",
            require: true
        },
        minStake: {
            description: "Minimum stake required for a relay (in 10e18)",
            type: "number",
            require: true,
            default: 1
        },
        minUnstakeDelay: {
            description: "Minimum unstake delay",
            type: "number",
            require: true,
            default: 1
        }
    },
    mempool: {
        maxBundleWaitTime: {
            description: "Maximum time to wait for a bundle to be submitted",
            type: "number",
            require: true,
            default: 3
        },
        maxBundleSize: {
            description: "Maximum number of operations in mempool before a bundle is submitted",
            type: "number",
            require: true,
            default: 3
        }
    },
    listener: {
        port: {
            description: "Port to listen on",
            type: "number",
            require: true,
            default: 3000
        }
    },
    executor: {
        pollingInterval: {
            description: "Polling interval for the executor module (ms)",
            type: "number",
            require: true,
            default: 100
        }
    },
    log: {
        level: {
            description: "Log level",
            type: "string",
            require: true,
            default: "trace"
        },
        environment: {
            description: "Environment",
            type: "string",
            require: true,
            default: "production"
        },
        logEnvironment: {
            description: "Log environment",
            type: "string",
            require: true,
            default: "production"
        }
    },
    entryPoint: {
        description: "EntryPoint contract addresses split by commas",
        type: "string",
        require: true
    },
    beneficiary: {
        description: "Beneficiary address to receive fees",
        type: "string",
        require: true
    }
}


export const bundlerCommand: CliCommand<IBundlerArgsInput> = {
    command: "run",
    describe: "Starts a bundler",
    options: bundlerOptions,
    handler: bundlerHandler,
    examples: [
        {
            command:
                "run --entryPoint 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789,0x0576a174D229E3cFA37253523E645A78A0C91B57 --beneficiary 0xa78fCd480107fBFAF84bDE5285A668396891d3E5 --signerPrivateKey 1060ac9646dffa5dc19c188e148c627c50a0e8250a2f195ec3c493ffae3ed019",
            description: "Starts a bundler"
        }
    ]
}
