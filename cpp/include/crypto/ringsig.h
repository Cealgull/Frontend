#ifndef __RINGSIG_H
#define __RINGSIG_H

#ifdef __cplusplus
extern "C" {
#endif

#include <openssl/bn.h>
#include <openssl/ec.h>
#include <openssl/evp.h>

#ifdef __cplusplus
namespace cealgull::crypto::ringsig{
namespace internal{
#endif

struct ringsig_keyset_spec {
  BIGNUM **privs;
  EC_POINT **pubs;
  EC_GROUP *g;
  int nr_mem;
};

struct ringsig_keyset_extern {
  char **privs;
  char *pubs;
  int nr_mem;
};

struct ringsig_keypair_extern {
  const char *priv;
  const char *pubs;
  int nr_mem;
  int mine;
};

struct ringsig_keypair_spec {
  BIGNUM *priv;
  EC_POINT **pubs;
  EC_GROUP *g;
  int nr_mem;
  int mine;
};

typedef struct ringsig_keyset_spec ringsig_keyset_spec_t;
typedef struct ringsig_keyset_extern ringsig_keyset_extern_t;
typedef struct ringsig_keypair_spec ringsig_keypair_spec_t;
typedef struct ringsig_keypair_extern ringsig_keypair_extern_t;

int ringsig_sign_len(int nr_mem);
int ringsig_signb64_len(int nr_mem);
int ringsig_sign(const ringsig_keypair_extern_t *spec, const char *msg,
                 int msg_len, char *sig);
int ringsig_sign_b64(const ringsig_keypair_extern_t *spec, const char *msg,
                     int msg_len, char *sigb64);

ringsig_keypair_extern_t ringsig_keypair_dispatch_spec(int mine);

#ifdef __cplusplus
}
}
}
#endif

#ifdef __cplusplus
#include <string>
#include <optional>
namespace cealgull::crypto::ringsig{

struct RingsigSpec {
  std::string priv;
  std::string pubs;
  int nr_mem;
  int mine;
};

std::optional<std::string> sign(const RingsigSpec &spec, const std::string &msg);

}

#endif
#endif
