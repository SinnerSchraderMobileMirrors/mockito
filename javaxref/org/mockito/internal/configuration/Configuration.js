defineStructure(
"Configuration",function(factory){with(factory) { typeTable(["org.mockito.configuration.ReturnValues","it"],["org.mockito.exceptions.base.MockitoException","cl"],["org.mockito.internal.configuration.Configuration","cl"],["org.mockito.internal.configuration.MockitoConfiguration","it"],["java.lang.ThreadLocal","cl"],["java.lang.Object","cl"],["java.lang.String","cl"],["org.mockito.internal.configuration.MockitoProperties","cl"]),methodTable([4,"ThreadLocal",[],"co"],[2,"Configuration",[],"co"],[2,"resetReturnValues",[],"me"],[2,"instance",[],"st me"],[4,"get",[],"me"],[4,"set",[5],"me"],[2,"getReturnValues",[],"me"],[3,"getReturnValues",[],"me"],[2,"setReturnValues",[0],"me"],[3,"setReturnValues",[0],"me"],[1,"MockitoException",[6],"co"],[3,"resetReturnValues",[],"me"]),localVariableTable(["returnValues","setReturnValues(org.mockito.configuration.ReturnValues)-returnValues"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.configuration;",nl,nl,ip," org.mockito.configuration.",T(0),";",nl,ip," org.mockito.exceptions.base.",T(1),";",nl,nl,O("/**",nl," * Singleton implementation of MockitoConfiguration",nl," */"),nl,C(2,[],$(pu,_,c,_,I("Configuration"),_,im,_,T(3),_,B(nl,w(4),nl,w(4),F(pu,_,s,_,f,_,T(4),"&lt;",T(2),"> ",I("CONFIG")," = ",n,_,N(0),P(),";"),nl,nl,w(4),F(pi,_,T(0),_,I("returnValues"),";"),nl,w(4),nl,w(4),M(1,[],[],$(pi," Configuration",P(),_,B(nl,w(8),N(2),P(),";",nl,w(4)))),nl,w(4),nl,w(4),O("/**",nl,w(5),"* gets the singleton instance of a configuration",nl,w(5),"*/"),nl,w(4),M(3,[],[],$(pu,_,s,_,T(2),_,I("instance"),P(),_,B(nl,w(8),i,_,P(G(2,"st fi","CONFIG"),".",N(4),P()," == ",L("null")),_,B(nl,w(12),G(2,"st fi","CONFIG"),".",N(5),P(n,_,N(1),P()),";",nl,w(8)),nl,w(8),r,_,G(2,"st fi","CONFIG"),".",N(4),P(),";",nl,w(4)))),nl,w(4),nl,w(4),O("/* (non-Javadoc)",nl,w(5),"* @see org.mockito.internal.configuration.MockitoConfiguration#getReturnValues()",nl,w(5),"*/"),nl,w(4),M(6,[7],[],$(pu,_,T(0),_,I("getReturnValues"),P(),_,B(nl,w(8),r,_,G(2,"fi","returnValues"),";",nl,w(4)))),nl,nl,w(4),O("/* (non-Javadoc)",nl,w(5),"* @see org.mockito.internal.configuration.MockitoConfiguration#setReturnValues(org.mockito.configuration.ReturnValues)",nl,w(5),"*/"),nl,w(4),M(8,[9],[],$(pu,_,v,_,I("setReturnValues"),P(V(0,$(T(0),_,I("returnValues")))),_,B(nl,w(8),i,_,P(W(0)," == ",L("null")),_,B(nl,w(12),tw,_,n,_,N(10),P(L("\"Cannot set null ReturnValues!\"")),";",nl,w(8)),nl,w(8),t,".",G(2,"fi","returnValues")," = ",W(0),";",nl,w(4)))),nl,nl,w(4),O("/* (non-Javadoc)",nl,w(5),"* @see org.mockito.internal.configuration.MockitoConfiguration#resetReturnValues()",nl,w(5),"*/"),nl,w(4),M(2,[11],[],$(pu,_,v,_,I("resetReturnValues"),P(),_,B(nl,w(8),G(2,"fi","returnValues")," = ",T(7),".",G(7,"st fi","DEFAULT_RETURN_VALUES"),";",nl,w(4)))),nl))));}});