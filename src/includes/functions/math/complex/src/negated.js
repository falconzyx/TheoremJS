negated() {
	if (!complex.isComplex) {
		throw "[TheoremJS]: Complex operation require complex numbers"
	}
	this.a = this.a.negated()
	this.b = this.b.negated()
	return this
}
