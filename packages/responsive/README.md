# Responsive

This package includes utilities for supporting responsive layouts for native
platforms. It provides a wrapper component called <Responsive> which listens to
orientation changes and provides layout information through context named
`ResponsiveContext`. Any child component can then use this layout information by
consuming `ResponsiveContext`.
