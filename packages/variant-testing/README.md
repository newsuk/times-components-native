# Variant Testing

This package includes utilities for supporting variant testing. It provides a wrapper
component called <VariantTesting> which provides config for the current variant group
through context named `VariantTestingContext`. Any child component can then use this
config information by consuming `VariantTestingContext` or by using the `useVariantTestingContext` hook.
