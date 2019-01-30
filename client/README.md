# Toda as a Servce API Example

The TodaQ Finance API is designed to enable web and application developers to integrate with the Toda Protocol using our hosted Toda-as-a-Service (TaaS) option.

The majority of functions in this API will be available as client libraries in a number of languages. We encourage developers to use the client libraries where possible, as these will enable future extensions (such as client-side validation of cryptographic primitives) which are not possible to offer using a REST API alone.

However, this collection of functions is indeed designed to provide first-class access to the core services offered by TodaQ, and many of our internal client applications - and those of our partners - are built ontop of it.

This API strives for compatibility with JSON API v1.0. Some aspects of the specification are not yet implemented: query and filtering attributes; as well as compound documents and selective attribute fetching. However, the overall approach of requests and responses adheres to the spec.

### What is TODA?

Toda is a protocol enabling distributed management of ownership for any digital entity (termed a file). Toda ensures that it is only possible for there to be a single verifiable owner of a file at any given time. Changing the ownership of a file is termed a transaction.

The protocol features several other extensions which permit appending metadata, and enforce certain encumberances and/or constraints.

### What is TODAQ?

TodaQ offers a variety of services surrounding the Toda protocol, including our flagship Toda-as-a-Service API. We provide cryptoraphically enforced, verifiable, and tamper-alarmed centralized services which wrap the core distributed protocols of TODA.

## Accounts

A TodaQ account is created when you wish to register one of your users. An account is required to participate on the network through our TaaS environment. An account establishes a "know-your-customer" relationship between the account holder and TodaQ; to comply with various regulations worldwide surrounding the exchange of valuable goods, it is important we are supplied with fundamental information regarding the account owner.

The account remains tied to your organization, and by default, it is not intended for transactions to occur outside of accounts belonging to the same organization. These restrictions can be lifted by request through our business services team.

Accounts may not be deleted, however, unused accounts should be marked as suspended (no longer active).

### Account Types

Accounts may be either individual or business accounts. They have slightly different "know-your-customer" requirements, and as such, we collect different data regarding each. We recommend that accounts are registered under whichever designation most closely matches the tax registration of the account holder in their primary jurisdiction.

## Account Functions

### Create Business Account

#### Example Request

```

```
