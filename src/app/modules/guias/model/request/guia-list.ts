export interface GuiaListReq {
  id: number;
  operacion: string;
  fecha_emision: Date | string;
  peso_bruto_total: string;
  peso_bruto_unidad_medida: string;
  punto_partida_direccion: string;
  codigo_partida_establecimiento_sunat: string;
  punto_llegada_direccion: string;
  codigo_llegada_establecimiento_sunat: string;
  observaciones: string;
  enviar_cliente: boolean;
  formato_pdf: string;
  tipo_comprobante: number;
  destinatario: number;
  placa: number;
  punto_partida: number;
  punto_llegada: number;
  items: any[];
}
